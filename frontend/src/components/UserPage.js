import React from 'react'
import { connect } from 'react-redux'
import {
  CssBaseline,
  Container,
  RadioGroup,
  Radio,
  Button,
  ButtonGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { blue, green, purple } from '@material-ui/core/colors'
import { ethers } from 'ethers'
import PropTypes from 'prop-types'
import 'semantic-ui-css/semantic.min.css'
import { Progress } from 'semantic-ui-react'
import { useSnackbar } from 'notistack'
import { donate, withdraw } from '../contractFunctions'
import {
  setContributorInfo,
  setBalance,
  setPrevMilestone,
  setCurrentMilestone,
  setIsWithdrawEnabled,
} from '../actions'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1, 2, 1),
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
  },
  title: {
    margin: theme.spacing(1, 0, 1),
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
  },
  gridUser: {
    color: theme.palette.getContrastText(blue[400]),
    backgroundColor: blue[400],
  },
  gridCampaign: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
  },
}))

const PurpleButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button)

const GreenButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(green[600]),
    backgroundColor: green[600],
    '&:hover': {
      backgroundColor: green[800],
    },
  },
}))(Button)

function UserPage(props) {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()

  const {
    walletAddress,
    charityAddress,
    donationBracket,
    contract,
    contributorInfo,
    provider,
    balance,
    goal,
    currentMilestone,
    prevMilestone,
    milestoneArray,
    isWithdrawEnabled,
    dispatch,
  } = props

  const [values, setValues] = React.useState({
    showDonateOptions: false,
    donationAmount: 10,
  })

  function getIndex() {
    for (let i = 0; i < milestoneArray.length; i += 1) {
      if (milestoneArray[i] === currentMilestone) {
        return i
      }
    }
    return -1
  }

  function getMilstoneDifference() {
    const index = getIndex()
    let difference = 0
    if (index !== -1) {
      difference = milestoneArray[index] - milestoneArray[index - 1]
    }
    return difference
  }

  function getUserPercentAmount() {
    const difference =
      Number(contributorInfo.currentPercentageAmount) -
      Number(contributorInfo.prevPercentageAmount)
    return difference === 0
      ? Number(contributorInfo.prevPercentageAmount)
      : difference
  }

  function handleChange(event, value) {
    setValues({ ...values, [event.target.name]: value })
  }

  const handleClick = async event => {
    event.preventDefault()
    if (event.currentTarget.name === 'Donate') {
      setValues({ ...values, showDonateOptions: true })
    }
    if (event.currentTarget.name === 'Withdraw') {
      const result = await withdraw(contract)
      if (!result.hasErrored) {
        enqueueSnackbar('withdraw successful', { variant: 'success' })
        const newContributorInfo = await contract.contributorsDB(walletAddress)
        dispatch(setContributorInfo(newContributorInfo))
        const checkIsWithdrawEnabled = await contract.isWithdrawEnabled()
        if (checkIsWithdrawEnabled !== isWithdrawEnabled) {
          dispatch(setIsWithdrawEnabled(checkIsWithdrawEnabled))
        }
      } else {
        enqueueSnackbar('withdraw failed', { variant: 'error' })
      }
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const { donationAmount } = values
    if (values.showDonateOptions) {
      setValues({
        ...values,
        showDonateOptions: false,
      })
      const result = await donate(
        ethers.utils.parseUnits(donationAmount.toString(), 'wei'),
        contract
      )
      if (!result.hasErrored) {
        enqueueSnackbar(
          `successfully donated ${donationAmount}, please wait while page reloads`,
          {
            variant: 'success',
          }
        )
        const newContributorInfo = await contract.contributorsDB(walletAddress)
        const newBalance = Number(await provider.getBalance(contract.address))
        if (newBalance >= currentMilestone) {
          dispatch(setPrevMilestone(currentMilestone))
          if (currentMilestone < goal) {
            dispatch(setCurrentMilestone(milestoneArray[getIndex() + 1]))
          } else {
            dispatch(setCurrentMilestone(goal))
          }
        }
        const checkIsWithdrawEnabled = await contract.isWithdrawEnabled()
        if (checkIsWithdrawEnabled !== isWithdrawEnabled) {
          dispatch(setIsWithdrawEnabled(checkIsWithdrawEnabled))
        }
        dispatch(setContributorInfo(newContributorInfo))
        dispatch(setBalance(newBalance))
      } else {
        enqueueSnackbar('donation amount is too big', { variant: 'error' })
      }
    }
  }

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Grid
          className={classes.group}
          container
          spacing={8}
          justify="space-evenly"
        >
          <Grid className={classes.gridUser} item xs={10} sm={5}>
            <Typography variant="h5" className={classes.title}>
              User details
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography variant="h6">contributer address</Typography>
                  }
                  secondary={
                    <Typography variant="subtitle2">{walletAddress}</Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography variant="h6">donation amount</Typography>
                  }
                  secondary={
                    <Typography variant="subtitle2">{`${String(
                      contributorInfo.donationAmount
                    )} WEI`}</Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<Typography variant="h6">token amount</Typography>}
                  secondary={
                    <Typography variant="subtitle2">{`${String(
                      contributorInfo.tokenAmount
                    )} DOR`}</Typography>
                  }
                />
              </ListItem>
            </List>
            <Progress
              value={getUserPercentAmount() * 10}
              total={getMilstoneDifference()}
              progress="percent"
              size="medium"
              label="user donation percentage to current milestone"
            />
          </Grid>
          <Grid className={classes.gridCampaign} item xs={10} sm={5}>
            <Typography variant="h5" className={classes.title}>
              Campaign details
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography variant="h6">charity address</Typography>
                  }
                  secondary={
                    <Typography variant="subtitle2">
                      {charityAddress}
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<Typography variant="h6">charity goal</Typography>}
                  secondary={
                    <Typography variant="subtitle2">{`${String(
                      goal
                    )} WEI`}</Typography>
                  }
                />
              </ListItem>
              <Progress
                value={balance}
                total={goal}
                progress="value"
                size="medium"
                label="overall donation amount to goal"
              />
              <ListItem>
                <ListItemText
                  primary={
                    <Typography variant="h6">current milestone</Typography>
                  }
                  secondary={
                    <Typography variant="subtitle2">{`${String(
                      currentMilestone
                    )} WEI`}</Typography>
                  }
                />
              </ListItem>
            </List>
            <Progress
              value={balance - prevMilestone}
              total={getMilstoneDifference()}
              progress="percent"
              size="medium"
              label="overall donation percentage to current milestone"
            />
          </Grid>
        </Grid>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <ButtonGroup
            fullWidth
            variant="contained"
            color="primary"
            className={classes.group}
            aria-label="full-width contained primary button group"
          >
            <Button
              type="button"
              name="Donate"
              className={classes.button}
              onClick={handleClick}
            >
              Donate
            </Button>
            <GreenButton
              disabled={!isWithdrawEnabled}
              type="button"
              name="Withdraw"
              className={classes.button}
              onClick={handleClick}
            >
              Withdraw
            </GreenButton>
          </ButtonGroup>
          {values.showDonateOptions && (
            <div>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Donation Bracket</FormLabel>
                <RadioGroup
                  aria-label="donationAmount"
                  name="donationAmount"
                  className={classes.group}
                  value={Number(values.donationAmount)}
                  onChange={handleChange}
                >
                  <Grid container direction="row">
                    {donationBracket.map((choices, index) => (
                      <FormControlLabel
                        key={index}
                        value={choices}
                        control={<Radio />}
                        label={`${choices} WEI`}
                      />
                    ))}{' '}
                  </Grid>
                </RadioGroup>
              </FormControl>
              <PurpleButton
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Submit donation Options
              </PurpleButton>
            </div>
          )}
        </form>
      </div>
    </Container>
  )
}

UserPage.propTypes = {
  walletAddress: PropTypes.string.isRequired,
  charityAddress: PropTypes.string.isRequired,
  donationBracket: PropTypes.array.isRequired,
  contract: PropTypes.any.isRequired,
  contributorInfo: PropTypes.any.isRequired,
  provider: PropTypes.any.isRequired,
  balance: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired,
  currentMilestone: PropTypes.number.isRequired,
  prevMilestone: PropTypes.number.isRequired,
  milestoneArray: PropTypes.array.isRequired,
  isWithdrawEnabled: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  const {
    contract,
    walletAddress,
    charityAddress,
    donationBracket,
    contributorInfo,
    provider,
    balance,
    goal,
    currentMilestone,
    prevMilestone,
    milestoneArray,
    isWithdrawEnabled,
  } = state.user
  return {
    contract,
    walletAddress,
    charityAddress,
    donationBracket,
    contributorInfo,
    provider,
    balance,
    goal,
    currentMilestone,
    prevMilestone,
    milestoneArray,
    isWithdrawEnabled,
  }
}

export default connect(mapStateToProps)(UserPage)

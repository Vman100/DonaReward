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
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ethers } from 'ethers'
import PropTypes from 'prop-types'
import { donate, withdraw } from '../contractFunctions'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
  },
}))

function UserPage(props) {
  const classes = useStyles()
  const { donationBracket, contract } = props
  const [values, setValues] = React.useState({
    showDonateOptions: false,
    donationAmount: 10,
    isWithdrawEnabled: false,
  })

  function handleChange(event, value) {
    setValues({ ...values, [event.target.name]: value })
  }

  const handleClick = async event => {
    event.preventDefault()
    if (event.currentTarget.name === 'Donate') {
      setValues({ ...values, showDonateOptions: true })
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const { donationAmount } = values
    if (values.showDonateOptions) {
      await donate(
        ethers.utils.parseUnits(donationAmount.toString(), 'wei'),
        contract
      )
      const isWithdrawEnabled = await contract.isWithdrawEnabled()
      setValues({ ...values, showDonateOptions: false, isWithdrawEnabled })
    }
    if (event.currentTarget.name === 'Withdraw') {
      await withdraw(contract)
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <ButtonGroup
            fullWidth
            variant="contained"
            color="primary"
            className={classes.button}
            aria-label="full-width contained primary button group"
          >
            <Button type="button" name="Donate" onClick={handleClick}>
              Donate
            </Button>
            <Button
              disabled={!values.isWithdrawEnabled}
              type="submit"
              name="Withdraw"
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Withdraw
            </Button>
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
                        label={choices}
                      />
                    ))}{' '}
                  </Grid>
                </RadioGroup>
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Submit donation Options
              </Button>
            </div>
          )}
        </form>
      </div>
    </Container>
  )
}

UserPage.propTypes = {
  donationBracket: PropTypes.array.isRequired,
  contract: PropTypes.any.isRequired,
}

const mapStateToProps = state => {
  const { contract, walletAddress, donationBracket } = state.user
  return {
    contract,
    walletAddress,
    donationBracket,
  }
}

export default connect(mapStateToProps)(UserPage)

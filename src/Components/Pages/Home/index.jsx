import React, { useState, useEffect } from 'react';
import {
  InputLabel, Container, FormControl, Select, Grid, makeStyles, Button, Typography,
} from '@material-ui/core';
import Swal from 'sweetalert2';
import ReactLoading from 'react-loading';

import GetInsurance from '../../../Services/getInsurance';
import InsuranceCard from '../../Commons/InsuranceCard';
import './index.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(3),
    minWidth: 120,
    background: '#fff',
    border: '1px solid #DDE3ED',
    boxSizing: 'border-box',
    borderRadius: '4px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(3),
    display: 'flex',
    flexDirection: 'row',
    padding: '8px 32px',
    height: '48px',
    background: '#1F61F7',
    boxShadow: '0px 10px 16px rgba(18, 25, 84, 0.07)',
    borderRadius: '1000px',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '32px',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  containerCenter: {
    textAlign: 'center',
    paddingTop: '20px',
    paddingBottom: '30px',
  },
  parrafo: {
    fontFamily: 'Poppins',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: -'0.2px',
    color: '#58606E',
    textAlign: 'center',
  },
  select: {
    textAlign: 'right',
  },
}));

const Home = () => {
  const classes = useStyles();
  const [showLoading, setshowLoading] = useState(false);
  const [state, setState] = useState({
    idInsurance: '',
  });
  const [Insurance, setInsurance] = useState();

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const submit = async (e) => {
    e.preventDefault();
    setshowLoading(true);
    if (state.idInsurance) {
      try {
        const insurance = await GetInsurance(state.idInsurance);
        if (insurance.status === 200) {
          setInsurance(insurance.data.insurance);
          setshowLoading(false);
        } else {
          setshowLoading(false);
          Swal.fire({
            icon: 'warning',
            text: 'Ha ocurrido un error, vuelva a intentarlo',
          });
        }
      } catch (error) {
        setshowLoading(false);
        Swal.fire({
          icon: 'warning',
          text: 'Ha ocurrido un error, vuelva a intentarlo',
        });
      }
    }
  };

  useEffect(() => {
  }, [state]);
  useEffect(() => {
  }, [Insurance]);

  return (
    <main>
      <Container className={classes.containerCenter}>
        <form onSubmit={submit}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              justify="center"
              alignItems="center"
            >
              <Typography variant="body2" color="textSecondary" component="h4" className={classes.parrafo}>
                Seguros BiceVida
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.parrafo}>
                Elige uno de nuestros planes para obtener más información
              </Typography>
            </Grid>
            <Grid item xs={4} sm={6} className={classes.select}>
              <FormControl required variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Plan</InputLabel>
                <Select
                  native
                  onChange={handleChange}
                  label="Plan"
                  inputProps={{
                    name: 'idInsurance',
                  }}
                  placeholder="Seleccione..."
                >
                  <option aria-label="None" value="" />
                  <option value={58}>Seguro Vida Activa </option>
                  <option value={59}>Seguro Viaje Protegido</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Button
                className={classes.button}
                variant="contained"
                type="submit"
                color="primary"
              >
                Consultar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      {
        (showLoading) && (
          <Container>
            <Grid
              container
              spacing={3}
              justify="center"
              alignItems="center"
            >
              <ReactLoading type="bubbles" color="#1F61F7" height={667} width={375} />
            </Grid>
          </Container>
        )
      }
      {
        (Insurance && !showLoading) && (
          <InsuranceCard data={Insurance} />
        )
      }
    </main>
  );
};
export default Home;

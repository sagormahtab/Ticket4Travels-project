import * as React from "react";
import { useState } from "react";
import {
  Button,
  Container,
  Card,
  CardHeader,
  CardContent,
  Paper,
  Grid,
  Box,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const ResetPassword = ({ theme }) => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  let { token } = useParams();

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios({
      method: "patch",
      url: `https://tickets4travel.herokuapp.com/api/v1/users/resetPassword/${token}`,
      data: {
        password,
        passwordConfirm,
      },
    })
      .then((data) => {
        alert("Password Reset successfully. Login to continue");
        clearForm();
        setLoading(false);
        history.push("/login");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          alert(error.response.data.message);
        } else if (error.request) {
          alert(error.request);
        } else {
          alert("Error", error.message);
        }
      });
  };

  const clearForm = () => {
    setPassword("");
    setPasswordConfirm("");
  };

  return (
    <>
      <Box
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)",
          height: "100vh",
        }}
      >
        <Container fixed>
          <Grid container justify="center">
            <Grid item xs={12} md={6} lg={4} style={{ marginTop: "5rem" }}>
              <Paper>
                <Card>
                  <CardHeader
                    title="Reset your password"
                    style={{ fontSize: "1.2rem", textAlign: "center" }}
                  />
                  <CardContent>
                    <form onSubmit={submit}>
                      <div>
                        <TextField
                          required
                          type="password"
                          label="New Password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          helperText="Minimum 4 characters"
                        />
                      </div>
                      <div>
                        <TextField
                          required
                          type="password"
                          label="Confirm Password"
                          name="passwordConfirm"
                          value={passwordConfirm}
                          onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                      </div>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={loading}
                        style={{ width: "100%", marginTop: "1rem" }}
                      >
                        {loading ? <CircularProgress size={23} /> : "Reset"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ResetPassword;

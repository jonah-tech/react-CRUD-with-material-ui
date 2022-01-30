import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,withStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";
import DCandidateForm from "./DCandidateForm";

const styles = theme =>({
  root:{
     "& .MuiTableCell-head":{
       fontSize:"1,25"
     }
  },

  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2)
  }
})

const DCandidates = ({classes,...props}) => {
  useEffect(() => {
    props.fecthAllDcandidates();
  }, []);

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={6}>
          <DCandidateForm />
        </Grid>
        <Grid item xs={6}>
          <TableContainer>
            <Table>
              <TableHead className={classes.root}>
                <TableRow>
                  <TableCell>Name             
                  </TableCell>
                  <TableCell>Mobile             
                  </TableCell>
                  <TableCell>Blood group             
                  </TableCell>
                  <TableCell>Age             
                  </TableCell>
                  <TableCell>Address             
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  props.dCandidateList.map((record,index)=>{
                   return(<TableRow key={index} hover>
                    <TableCell>{record.fullName}</TableCell>
                    <TableCell>{record.mobile}</TableCell>
                    <TableCell>{record.bloodGroup}</TableCell>
                    <TableCell>{record.age}</TableCell>
                    <TableCell>{record.address}</TableCell>
                  </TableRow>) 
                  })
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  dCandidateList: state.dCandidate.list,
});

const mapActionToProps = {
  fecthAllDcandidates: actions.fecthAll,
};

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(DCandidates));

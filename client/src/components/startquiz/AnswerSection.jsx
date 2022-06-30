import { Box, Paper, Grid, Typography } from "../../utlis/materialComponents";
import { styled } from "@mui/material/styles";
const Answer = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  mt: 3,
  width: "90%",
  color: theme.palette.text.secondary,
  "&:hover": {
    width: "92%",
    cursor: "pointer",
  },
}));
const AnswerSection = (props) => {
  const selectHandler = () => {
    props.checkClickHandler(props.index);
  };
  return (
    <Grid item xs={6} onClick={selectHandler}>
      <Box>
        <Answer
          sx={
            props.clickOpt === props.index
              ? { backgroundColor: "#E7AB79" }
              : { backgroundColor: props.color }
          }
        >
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#ffffff",
              fontWeight: "500",
            }}
          >
            {props.option}
          </Typography>
        </Answer>
      </Box>
    </Grid>
  );
};

export default AnswerSection;

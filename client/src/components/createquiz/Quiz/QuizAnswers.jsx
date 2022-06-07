import React from 'react'

const QuizAnswers = () => {
  return (
    <Grid item xs={6}>
    <Item>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Item>
          {" "}
          <Box
            sx={{
              width: "40px",
              height: "109px",
              backgroundColor: "#40890F",
              borderRadius: 1,
            }}
          ></Box>
        </Item>
        <Item>
          {" "}
          <TextField
            // fullWidth
            placeholder="Add answer 4"
            id="fullWidth"
            variant="standard"
            sx={{
              input: { width: "294px", height: "100px" },
              pl: 2,
              display: "flex",

              justifyContent: "center",
            }}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Item>
        <Item
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Checkbox
            {...label}
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
        </Item>
      </Box>
    </Item>
  </Grid>
  )
}

export default QuizAnswers
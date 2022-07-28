import { Container, Stack, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export default function Home() {
  return (
    <Container className={"background-gradient"}>
      <Stack height={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Typography
          textAlign={{ xs: "center", md: "left" }}
          fontWeight="bold"
          color={"white"}
          variant="h3"
        >
          Welcome to{" "}
          <HomeIcon
            sx={{
              fontSize: "64px",
              verticalAlign: "bottom",
            }}
          />{" "}
          page!!
        </Typography>
      </Stack>
    </Container>
  );
}

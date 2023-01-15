"use client"
import { Container } from "@mui/system"
import {
  Avatar,
  Badge,
  Box,
  ButtonBase,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material"
import theme from "./theme"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded"
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded"
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded"
import BackpackRoundedIcon from "@mui/icons-material/BackpackRounded"
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions"
import AttachFileIcon from "@mui/icons-material/AttachFile"
import SendIcon from "@mui/icons-material/Send"
import MyLocationIcon from "@mui/icons-material/MyLocation"
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone"
import EmailIcon from "@mui/icons-material/Email"

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        sx={{
          display: "flex",
          minHeight: "80%",
          mt: 10,
        }}>
        <Users />
        <Messages />
        <Profile />
      </Container>
    </ThemeProvider>
  )
}

const Users = () => {
  return (
    <Box
      sx={{
        // boxShadow: "14px 8px 41px 4px rgba(46, 64, 77, 0.6)",
        width: "30%",
        borderRadius: "10px",
        backgroundImage: "linear-gradient(190deg, #007afd 0%, #0079ff 100%)",
        transform: "translate(1%,0) scale(1.015)",
      }}>
      <Box
        sx={{
          height: "10%",
          display: "flex",
        }}>
        <Box flexGrow={1} position={"relative"}>
          <Typography
            sx={{ transform: "translate(5%,0)", ml: 1, p: "1.4rem 1.7rem" }}
            className="verticalCenter"
            letterSpacing={"-0.7px"}
            fontWeight={700}
            color={"white"}
            fontSize={"2rem"}>
            WEHELP
          </Typography>
        </Box>
        <Box position={"relative"}>
          <IconButton
            size="large"
            className="verticalCenter"
            aria-label="delete">
            <AddCircleIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
        <Box position={"relative"}>
          <IconButton size="large" className="verticalCenter">
            <MoreVertIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          boxShadow: "0px 2px 8px 0px rgba(34, 60, 80, 0.2)",
          p: "0 1.5rem",
          height: "10%",
        }}>
        <TextField
          fullWidth
          id="filled-search"
          label="Search field"
          type="search"
          sx={{
            borderRadius: "4px",
            bgcolor: "#3596ff",
            "& input": {
              color: "white",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiInputLabel-root": {
              color: "#fffffff2",
            },
            "& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused": {
              color: "#ffffffb3",
            },
            "& input::-webkit-search-cancel-button": {
              visibility: "hidden",
            },
          }}
        />
      </Box>
      <Box
        display={"grid"}
        gridAutoFlow={"column"}
        sx={{
          pb: "0.5rem",
          pt: "1rem",
          "&>*": {
            textAlign: "center",
          },
        }}>
        <Box>
          <IconButton className="verticalCenter">
            <HistoryRoundedIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
        <Box>
          <IconButton className="verticalCenter">
            <SupervisorAccountRoundedIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
        <Box>
          <IconButton className="verticalCenter">
            <ImportContactsRoundedIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>

        <Box>
          <IconButton className="verticalCenter">
            <BackpackRoundedIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ height: "70%" }}>
        <Box
          sx={{
            width: "100%",
            maxWidth: 360,
          }}>
          <nav aria-label="main mailbox folders">
            <List sx={{ color: "white" }}>
              <Divider />
              <ListItemButton>
                <ListItem disablePadding>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    secondaryTypographyProps={{
                      sx: { color: "whitesmoke" },
                    }}
                    primary="Brunch this weekend?"
                    secondary={
                      <>
                        <Typography
                          fontWeight={"600"}
                          sx={{ display: "inline", color: "whitesmoke" }}
                          component="span"
                          variant="body2"
                          color="text.primary">
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </>
                    }
                  />
                </ListItem>
              </ListItemButton>
            </List>
          </nav>
        </Box>
      </Box>
    </Box>
  )
}

const Messages = () => {
  return (
    <Box sx={{ width: "45%", bgcolor: "whitesmoke", position: "relative" }}>
      <Box
        sx={{
          boxShadow: "0px 14px 8px 0px rgba(34, 60, 80, 0.2)",
          height: "12%",
        }}>
        <Typography sx={{ pl: "2rem" }} className="verticalCenter" variant="h4">
          {" "}
          Elizabeth Nelson <span style={{ color: "green" }}> online </span>
        </Typography>
      </Box>
      <Box
        sx={{
          gap: "1rem",
          display: "flex",
          flexDirection: "column",
          height: "74%",
          p: "1rem",
        }}>
        <Box gap={"1rem"} display={"flex"} flexDirection={"row"}>
          <Box>
            {" "}
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography paddingTop={"0.5rem"} textAlign={"center"}>
              10:31
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: "#eaeaea",
              p: "1rem",
              borderRadius: "0px 10px 10px 10px",
            }}>
            {" "}
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              assumenda consequuntur ipsum vel maxime! Porro quam nemo dolores
              tempore ullam atque reiciendis? Nostrum eaque ut, tenetur numquam
              accusamus officiis soluta!
            </Typography>
          </Box>
        </Box>
        <Box gap={"1rem"} display={"flex"} flexDirection={"row"}>
          <Box
            sx={{
              bgcolor: "#007afd",
              p: "1rem",
              borderRadius: "10px 0px 10px 10px",
            }}>
            {" "}
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              assumenda consequuntur ipsum vel maxime! Porro quam nemo dolores
              tempore ullam atque reiciendis? Nostrum eaque ut, tenetur numquam
              accusamus officiis soluta!
            </Typography>
          </Box>
          <Box>
            {" "}
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography paddingTop={"0.5rem"} textAlign={"center"}>
              10:31
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ height: "14%", position: "relative", p: "1rem" }}>
        <TextField
          className="verticalCenter"
          fullWidth
          id="outlined-multiline-flexible"
          multiline
          label={"Введите сообщение"}
          maxRows={2}
        />
        <Box
          position={"absolute"}
          top={"50%"}
          right={"5%"}
          sx={{ transform: "translate(0, -50%)" }}>
          <IconButton aria-label="delete">
            <EmojiEmotionsIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <AttachFileIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <SendIcon sx={{ color: "#007afe" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

const Profile = () => {
  return (
    <Box
      sx={{
        borderRadius: "5px 10px 10px 5px",
        bgcolor: "white",
        width: "25%",
        transform: "scale(1.005)",
      }}>
      <Box
        height={"40%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot">
          <ImageButton focusRipple key={"Inna Ivanova"}>
            <ImageSrc
              style={{
                backgroundImage: `url(${"https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?w=740&t=st=1673776784~exp=1673777384~hmac=1dfe58c2a36ce157bc76af1c83bb28dc801a41602dec7e4ac5970cbaf3d68d10"})`,
              }}
            />
            <ImageBackdrop className="MuiImageBackdrop-root" />
          </ImageButton>
        </StyledBadge>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          alignItems: "center",
          "&>div": {
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
          },
        }}>
        <Box sx={{ textAlign: "center", color: "gray" }}>
          <MyLocationIcon /> <Typography> &nbsp; Манчестер, Лондон</Typography>
        </Box>
        <Box sx={{ textAlign: "center", color: "gray" }}>
          <PhoneIphoneIcon /> <Typography> &nbsp; 8 999 777 36 36</Typography>
        </Box>
        <Box sx={{ textAlign: "center", color: "gray" }}>
          <EmailIcon /> <Typography> &nbsp; abobabaloba@mail.com</Typography>
        </Box>
      </Box>
    </Box>
  )
}

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  borderRadius: "50%",
  overflow: "hidden",
  height: "12rem",
  width: "12rem",
  [theme.breakpoints.down("sm")]: {},
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.3,
    },
  },
}))

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
})

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0,
  transition: theme.transitions.create("opacity"),
}))

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))

import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  styled,
  TextField,
  Divider,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";
import {
  AccountCircleOutlined,
  KeyOutlined,
  LoginOutlined,
  VisibilityOff,
  Visibility,
} from "@mui/icons-material";
import { useToggle } from "ahooks";
import {
  REGION_DOMESTIC,
  REGION_INTERNATIONAL,
  RegionType,
} from "~/src/constant";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "remix-i18next";
import { Link } from "remix";

// This tells remix to load the "home" namespace
export let handle = {
  i18n: "login",
};

const HeaderWrapper = styled(Box)`
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.palette.primary.main};
  .logo {
    width: 48px;
    height: 48px;
  }
`;

const ContentWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30%;
  & > * {
    margin-top: 24px;
  }
`;

const InputWrapper = styled(Box)`
  display: flex;
  align-items: flex-end;
  .MuiSvgIcon-root {
    color: ${(props) => props.theme.palette.action.active};
    margin: 4px 8px 4px 0;
  }
`;

const Login: FC = () => {
  let { t } = useTranslation("login");

  const [showPassword, { toggle: toggleShowPassword }] = useToggle(false);
  const [region, setRegion] = useState<RegionType>();

  const handleRegionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegion(event.target.value as RegionType);
  };
  const handleLogin = () => {};
  return (
    <>
      <HeaderWrapper>
        <Avatar variant="rounded">
          <img className="logo" src="/assets/icon.png" alt="icon" />
        </Avatar>
      </HeaderWrapper>

      <ContentWrapper maxWidth="sm">
        <InputWrapper>
          <AccountCircleOutlined />
          <TextField
            label={t("account")}
            variant="standard"
            sx={{ width: 224 }}
          />
        </InputWrapper>

        <InputWrapper>
          <KeyOutlined />
          <TextField
            variant="standard"
            label="password"
            InputProps={{
              type: showPassword ? "text" : "password",
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ width: 224 }}
          />
        </InputWrapper>

        <Box sx={{ mt: 6 }}>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="region"
              name="region"
              onChange={handleRegionChange}
            >
              <FormControlLabel
                value={REGION_INTERNATIONAL}
                control={<Radio size="small" />}
                label="international"
              />
              <FormControlLabel
                value={REGION_DOMESTIC}
                control={<Radio size="small" />}
                label="domestic"
              />
            </RadioGroup>

            <FormControlLabel
              value="end"
              control={<Radio size="small" />}
              label="Stay permanently logged in"
            />
          </FormControl>
        </Box>
        <Box>
          <Button
            disableElevation
            variant="contained"
            startIcon={<LoginOutlined />}
            sx={{ width: 260, mt: 8 }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "20px",
          }}
        >
          <Link to={`/login?lng=zh-CN`}>
            <Typography onClick={() => useChangeLanguage("zh-CN")}>
              Forget password
            </Typography>
          </Link>
          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
          <Link to={`/login?lng=en-US`}>
            <Typography onClick={() => useChangeLanguage("en-US")}>
              Change password
            </Typography>
          </Link>
        </Box>
      </ContentWrapper>
    </>
  );
};

export default Login;

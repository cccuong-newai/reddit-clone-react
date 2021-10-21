import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  OutlinedInput,
  RadioGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { Info, LockRounded, Public, RemoveRedEye } from "@mui/icons-material";
import Radio from "@mui/material/Radio";
import { useState } from "react";
import { useCreateCommunityDialog } from "../hooks/useCreateCommunityDialog";

export default function CreateCommunityDialog() {
  const communityDialog = useCreateCommunityDialog(true);

  const theme = useTheme();

  const [cName, setCName] = useState("");
  const handleChangeCName = (e: any) => {
    setCName(e.target.value);
  };

  return (
    <Dialog
      key={communityDialog.key}
      open={communityDialog.open}
      onClose={communityDialog.hide}
    >
      <DialogTitle style={{ fontWeight: "bold", fontSize: "14px" }}>
        Create a community
      </DialogTitle>
      <DialogContent>
        <Divider />
        <Typography variant="h4" sx={{ marginTop: "1rem", fontWeight: "bold" }}>
          Name
        </Typography>
        <Typography
          variant="h6"
          sx={{
            // @ts-ignore
            color: theme.palette.text.secondary,
            display: "flex",
            alignItems: "center",
          }}
        >
          Community names including capitalization cannot be changed.
          <Tooltip
            title={`Names cannot have spaces (e.g., "r/bookclub" not "r/book club"), must be between 3-21 characters, and underscores ("_") are the only special characters allowed. Avoid using solely trademarked names (e.g., "r/FansOfAcme" not "r/Acme").`}
          >
            <Info
              sx={{ width: "1rem", height: "1rem", marginLeft: "0.3rem" }}
            />
          </Tooltip>
        </Typography>
        <Box sx={{ position: "relative" }}>
          <OutlinedInput
            fullWidth
            size="small"
            sx={{
              height: "2.3rem",
              marginTop: "1rem",
              paddingLeft: ".3rem",
              // @ts-ignore
              color: theme.palette.text.secondary,
            }}
            value={cName}
            onChange={handleChangeCName}
          />
          <Typography
            sx={{
              position: "absolute",
              top: "1.45rem",
              left: ".5rem",
              // @ts-ignore
              color: theme.palette.text.secondary,
            }}
          >
            r/
          </Typography>
        </Box>
        <Typography
          // @ts-ignore
          sx={{ color: theme.palette.text.secondary, marginTop: "1rem" }}
          variant="h6"
        >
          21 Characters remaining
        </Typography>
        <FormControl component="fieldset">
          <Typography
            variant="h4"
            sx={{
              marginTop: "1rem",
              fontWeight: "bold",
              marginBottom: ".2rem",
            }}
          >
            Community type
          </Typography>
          <RadioGroup
            aria-label="Community type"
            defaultValue="public"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="public"
              control={<Radio />}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Public />
                  <Typography
                    variant="subtitle2"
                    sx={{ margin: ".3rem", fontWeight: "550" }}
                  >
                    Public
                  </Typography>
                  <Typography
                    variant="h5"
                    // @ts-ignore
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    Anyone can view, post, and comment to this community
                  </Typography>
                </Box>
              }
            />
            <FormControlLabel
              value="restricted"
              control={<Radio />}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <RemoveRedEye />
                  <Typography
                    variant="subtitle2"
                    sx={{ margin: ".3rem", fontWeight: "550" }}
                  >
                    Restricted
                  </Typography>
                  <Typography
                    variant="h5"
                    // @ts-ignore
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    Anyone can view this community, but only approved users can
                    post
                  </Typography>
                </Box>
              }
            />
            <FormControlLabel
              value="private"
              control={<Radio />}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LockRounded />
                  <Typography
                    variant="subtitle2"
                    sx={{ margin: ".3rem", fontWeight: "550" }}
                  >
                    Private
                  </Typography>
                  <Typography
                    variant="h5"
                    // @ts-ignore
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    Only approved users can view and submit to this community
                  </Typography>
                </Box>
              }
            />
          </RadioGroup>
        </FormControl>

        {/* Checkbox */}
        <Typography variant="h4" sx={{ marginTop: "1rem", fontWeight: "bold" }}>
          Adult content
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Checkbox />
          <Typography
            variant="h6"
            sx={{
              color: "white",
              backgroundColor: "#FF585B",
              fontWeight: "bold",
              padding: ".15rem",
              borderRadius: ".2rem",
            }}
          >
            NSFW
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold", marginLeft: ".3rem" }}
          >
            18+ year old community
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions
        // @ts-ignore
        sx={{ backgroundColor: theme.palette.backgroundSecondary.default }}
      >
        <Button
          onClick={communityDialog.hide}
          sx={{
            // @ts-ignore
            color: theme.palette.text.secondary,
            // @ts-ignore
            borderColor: theme.palette.text.secondary,
          }}
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          onClick={communityDialog.hide}
          variant="contained"
          // @ts-ignore
          sx={{ backgroundColor: theme.palette.neutral.main }}
        >
          Create Community
        </Button>
      </DialogActions>
    </Dialog>
  );
}

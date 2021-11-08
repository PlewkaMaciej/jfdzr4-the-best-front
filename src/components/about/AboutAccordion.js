import { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1.5rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function AboutUsAccordions() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>SMART BOOKS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>
              <b>SMART BOOKS</b> is a design-minded, multi-disciplinary brand
              offering experiences and events related to books and reading.
              Founded and run by <b>The-Best-Front Team</b> in 2021 from Poland.
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>OUR PHILOSOPHY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>
              Some people like to read on a screen. Other people need the
              variety and artistry, the sight, smell, and feel of actual
              books.They love seeing them on their shelves; they love having
              shelves for them.
            </div>
            <div>
              They love taking them along when they leave the house, and
              stacking them by their bedsides. They love finding old letters and
              bookmarks in them. They like remembering where they bought them or
              who they received them from.
            </div>
            <div>
              They can't pass a bookstore without going in and getting
              something, they keep a library card and use it.
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>CONTACT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>Email: info@smartbookshop.com</div>
            <div>Address: Solec 34, 00-404 Warsaw, Poland</div>
            <div>Phone: +48 567 128 789</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AboutUsAccordions;

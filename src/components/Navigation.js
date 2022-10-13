import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

export default function Navigation() {
  return (
    <div className="flex y-center x-center">
      <Link to="/" className="flex y-center">
        <InfoIcon /> <span>About</span>
      </Link>
      <Link to="/portfolio" className="flex y-center">
        <AccountTreeIcon /> Portfolio
      </Link>
      <Link to="/contact" className="flex y-center">
        <PermContactCalendarIcon /> Contact
      </Link>
      <Link to="/resume" className="flex y-center">
        <AssignmentIndIcon /> Resume
      </Link>
    </div>
  );
}

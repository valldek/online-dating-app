import React from 'react';
import { FaChevronDown, FaCalendar, FaCalendarAlt, FaInbox} from 'react-icons/fa';

export const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
      <li>
        <span>
          <FaInbox />
        </span>
        <span>
          Inbox
        </span>
      </li>
      <li>
        <span>
          <FaCalendar />
        </span>
        <span>
          Today
        </span>
      </li>
      <li>
        <span>
          <FaCalendarAlt />
        </span>
        <span>
          Next 7 days
        </span>
      </li>
    </ul>
    <div className="sidebar__middle">
      <span>
        <FaChevronDown />
      </span>
      <h2>Projects</h2>
    </div>
    <ul className="sidebar__projects">Projects will be here</ul>
    Add Project Component here
  </div>
)
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 700;
    color: #000;
    transition: all 0.3s ease 0s;

    &active {
        color: #cd4631;
        transition: all 0.3s ease 0s;
    }
`;
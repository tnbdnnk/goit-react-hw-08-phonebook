import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight: 700;
    color: #2a363b;

    &.active {
        color: #CD4631;
    }
`;
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: rgb(108, 53, 53);
`;
export const Navbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
  height: 100%
  z-index: 1;
  padding-right: 20px;
  // background-color:rgb(71, 52, 52);
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  color: white;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;

export const Li = styled.li`
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background-color: #38bdf8; /* sky blue or your accent color */
    transition: width 0.3s ease-in-out;
  }

  &.active::after {
    width: 100%;
  }

  &:hover::after {
    width: 100%;
  }
`;

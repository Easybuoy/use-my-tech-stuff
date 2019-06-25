import styled from "styled-components";

const Category = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  /* background-position: center; */
  height: 300px;
  color: white;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 1;
    font-size: 3rem;
    font-family: "Ubuntu", sans-serif;
    height: 100%;
  }
`;
export { Category };

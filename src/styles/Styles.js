import styled from "styled-components";

const CategoryHeader = styled.header`
  background-image: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    url("https://images.unsplash.com/photo-1534949532948-7c512aa3921b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
  width: 100%;
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
  background-position: center;
  margin-bottom: 3rem;

  .header-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 100vh;
    align-items: center;
    color: white;
    font-family: "Ubuntu", sans-serif;

    h3 {
      font-size: 3rem;
    }
  }
`;

const Category = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
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

const Button = styled.button`
  background-color: #c015e9;
  color: #ffffff;

  &:hover {
    color: #ffffff;
  }

  &:focus {
    background-color: #7b1fa2;
  }
`;

// const Button = styled.button`
//   background-color: #1486e8;
//   border: none;
// `;

const CategoryDetail = styled.div`
  font-family: "Ubuntu", sans-serif;
  .card,
  .card .view img {
    /* border-radius: 0; */
  }

  .category-detail {
    height: 250px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    &:hover {
      .category-detail-content {
        opacity: 1;
      }
    }

    .category-detail-content {
      opacity: 0;
      transition: 0.8s;
      background: rgba(0, 0, 0, 0.5);
      height: 100%;
      width: 100%;
      color: #ffffff;
      display: flex;
      flex-wrap: wrap;
      .message {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        padding-bottom: 2rem;
      }
      @media (max-width: 990px) {
        opacity: 1;
      }
      .ratings {
        display: flex;
        width: 100%;
        align-items: center;
        padding: 0;
        color: #1cae9e;
        padding-left: 0.5rem;
      }
    }
  }

  .card-body {
    h4 {
      font-size: 2rem;
    }

    h6 {
      font-size: 1.3rem;
    }

    p {
      font-size: 1.4rem;
    }
    .price {
      display: flex;
      p {
        margin: 0 0.2rem;
      }
      .price-value {
        color: #1cae9e;
      }
    }
  }
`;

const Navbar = styled.div`
  .navbar-collapse {
    .navbar-nav {
      .nav-item {
        .nav-text {
          font-weight: bold;
          font-family: "Ubuntu", sans-serif;
          color: #c015e9;

          &:hover {
            background-color: #c015e9;
            color: white;
          }

          @media (max-width: 990px) {
            background-color: #c015e9 !important;
            color: white;

            &:hover {
              background-color: inherit;
              color: inherit;
            }
          }
        }
      }
    }
  }

  .navbar-toggler {
    background-color: #c015e9;
  }

  .navbar-nav {
    @media (min-width: 990px) {
      align-items: center;
    }
    @media (max-width: 990px) {
      flex-direction: column;
    }
  }

  .nav-unauthenticated {
    @media (min-width: 990px) {
      width: 25%;
    }

    button {
      margin: 0 0.5rem;
      @media (max-width: 990px) {
        margin: 0.5rem 0;
      }
    }

    .nav-unauthenticated-link {
      display: flex;
      text-decoration: none;
    }
  }

  .search-div {
    text-align: center;
    width: 70%;
    .search {
      display: flex;
      justify-content: flex-end;
      width: 100%;

      input {
        width: 70%;
        text-align: center;
        border: 2px solid #c015e9;
        border-radius: 20px;
        transition: 0.5s;

        &:focus {
          border: 2px solid #c015e9;
          outline: none;
          -webkit-box-shadow: 0px 0px 2px 1px rgba(192, 21, 233, 1);
          -moz-box-shadow: 0px 0px 2px 1px rgba(192, 21, 233, 1);
          box-shadow: 0px 0px 2px 1px rgba(192, 21, 233, 1);
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
  }
`;

const PreLoader = styled.div`
  margin: 15rem 0;
`;

const Location = styled.div`
  display: flex;
  font-family: "Ubuntu", sans-serif;
  width: 40%;
  margin: 0 auto;
  flex-direction: column;
  padding-bottom: 2rem;

  @media (max-width: 990px) {
    width: 100%;
  }
  .location-input {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .md-form {
      width: 95%;
      input {
        width: 100%;
        border-bottom: 4px dashed #4dd0e1;
        font-size: 1.5rem;

        &:focus {
          border-bottom: 4px dashed #4dd0e1;
          border-right: none;
          border-left: none;
        }
      }
    }
    img {
      height: 30px;
    }
  }

  .location-options {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    select {
      color: #c015e9;
      background-color: white;
      font-weight: bold;
      outline: none;
      border: none;
      font-size: 1.2rem;

      option {
        background-color: white;
      }
    }

    p {
      font-size: 1.5rem;
      padding: 0 0.2rem;
      margin: 0;
    }

    .location-miles {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: baseline;
    }

    .rule {
      border-left: 2px solid black;
      width: 50px;
    }

    .location-popularity {
      width: 50%;
      display: flex;
      flex-direction: row;
      justify-content: baseline;
    }
  }
`;

const NotFound = styled.div`
  margin-bottom: 5rem;

  img {
    width: 100%;
    height: 70vh;
  }

  button {
    display: flex;
    margin: 0 auto;
  }
`;

const Item = styled.div`
  font-family: "Ubuntu", sans-serif;

  .item-caption {
    width: 100%;
    height: 100vh;
  }

  .item-content {
    display: flex;

    @media (max-width: 770px) {
      flex-direction: column;
    }
    .item-detail {
      display: flex;
      justify-content: space-between;

      .item-detail-header {
        display: flex;
        flex-direction: column;

        h6 {
          font-size: 1.5rem;
          padding-left: 0.5rem;
        }

        .item-detail-location {
          display: flex;
        }

        .item-detail-description {
          width: 90%;
        }
      }

      .item-detail-image {
        text-align: center;
        color: #c015e9;
        img {
          height: 70px;
          width: 70px;
          border-radius: 50%;
          border: 5px solid #c015e9;
          /* background-image: linear-gradient(to right top, #c015e9, #9550f6, #686af9, #3b7af4, #1285e7); */
        }
      }
    }

    .item-booking {
      /* border: 1px solid blue; */
    }
  }

  .price {
    display: flex;
    p {
      margin: 0 0.2rem;
    }
    .price-value {
      color: #1cae9e;
    }
  }
`;

const Input = styled.input`
  &:focus {
    border-color: #c015e9;
    -webkit-box-shadow: 0px 0px 3px 1px rgba(192, 21, 233, 1);
    -moz-box-shadow: 0px 0px 3px 1px rgba(192, 21, 233, 1);
    box-shadow: 0px 0px 3px 1px rgba(192, 21, 233, 1);
  }
`;

const BookItemForm = styled.form`
  border: 5px solid red;

  p {
    font-family: "Ubuntu", sans-serif;
  }

  .top-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 2px solid #a5a5a5;
    padding-bottom: 1rem;

    .price {
      display: flex;
      width: 50%;
      font-size: 1.3rem;

      .price-value {
        color: #1cae9e;
        font-weight: bold;
      }
    }

    .ratings {
      display: flex;
      width: 100%;
      align-items: center;
      padding: 0;
      color: #1cae9e;
      padding-left: 0.5rem;
      justify-content: flex-end;
    }
  }
`;

export {
  Category,
  CategoryHeader,
  Button,
  CategoryDetail,
  Navbar,
  PreLoader,
  Location,
  NotFound,
  Item,
  Input,
  BookItemForm
};

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
  background-color: #1486e8;
  border: none;
`;

const CategoryDetail = styled.div`
  font-family: "Ubuntu", sans-serif;
  .card,
  .card .view img {
    border-radius: 0;
  }

  .category-detail {
    height: 250px;
    width: 100%;

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

export { Category, CategoryHeader, Button, CategoryDetail };

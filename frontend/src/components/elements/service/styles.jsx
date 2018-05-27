import styled from "styled-components";

export const Container = styled.div`
  margin: 16px;
  position: relative;
  padding: 16px 0px 16px 16px;
  font-family: Roboto;
  max-width: 300px;
  max-height: 160px;
  min-width: 300px;
  min-height: 160px;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
`;
export const ServiceHeader = styled.h3`
  margin-bottom: 0;
  margin-top: 0;
  font-weight: 700;
  font-family: Roboto Slab;
`;

export const ServiceIcon = styled.i`
  color: #777777;
  font-size: 28px;
  margin-right: 7px;
`;

export const ServiceTitle = styled.a`
  color: #6d006d;
  font-weight: 200;
  text-decoration: none;
  color: rgb(68, 174, 219);
  font-size: 32px;
  cursor: pointer;
`;

export const Description = styled.p`
  margin-bottom: 0;
  font-size: 14px;
  color: #666;
  min-height: 3em;
`;

export const ButtonGroup = styled.div`
  height: 38px;
  position: absolute;
  width: 90%;
  bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: Roboto;
  font-weight: 400;
`;

export const ServiceButton = styled.a`
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  height: 35px;
  line-height: 30px;
  padding: 4px 8px 4px 4px;
  margin: 4px;
  border-radius: 2px;
  text-decoration: none;
  color: white;
  background: rgb(68, 174, 219);
`;

export const GithubButton = styled.a`
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  height: 35px;
  line-height: 30px;
  padding: 4px 8px 4px 4px;
  margin: 4px;
  border-radius: 2px;
  text-decoration: none;
  color: white;
  background: grey;
`;

export const ButtonIcon = styled.i`
  margin-left: 8px;
  margin-right: 4px;
`;

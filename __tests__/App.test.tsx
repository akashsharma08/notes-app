import React from "react";
import { render } from "@testing-library/react-native";
import App from "../src/App"; // Adjust the import path based on your folder structure

describe("App Component", () => {
  it("renders correctly", async () => {
    const { findByText } = render(<App />);
    
 
  });
});

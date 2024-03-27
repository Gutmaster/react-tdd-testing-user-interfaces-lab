import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);
  
    // Act
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });
  
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of the user", () => {
    render(<App />);

    const image = screen.getByAltText("user image");
  
    expect(image).toHaveAttribute("src", 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fbrindle-boar-by-daveallsop-on-deviantart--305681893466718572%2F&psig=AOvVaw0E2YjzhSJk1VVsgGkquZow&ust=1711585590139000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCYwquXk4UDFQAAAAAdAAAAABAE');
});

test("displays a 2nd level about me header", () => {
    // Arrange
    render(<App />);
  
    // Act
    const image = screen.getByRole("heading", {
      name: /about me/i,
      level: 2
    });
  
    // Assert
    expect(image).toBeInTheDocument();
});

test("paragraph element with biography", () => {
    // Arrange
    render(<App />);
  
    // Act
    const paragraph = screen.getByText(/i am chevy/i);
    // Assert
    expect(paragraph).toBeInTheDocument();
  });

test("displays github and linkedin links", () => {
    render(<App />);
  
    const githubLink = screen.getByRole("link", {name: /github/i,})
    const linkedinLink = screen.getByRole("link", {name: /linkedin/i,})
  
    expect(githubLink).toHaveAttribute("href",
      expect.stringContaining("https://github.com")
    );
  
    expect(linkedinLink).toHaveAttribute("href",
      expect.stringContaining("www.linkedin.com")
    );
  });
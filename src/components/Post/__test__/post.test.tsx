import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Post from "..";

describe("Teste componente Post", () => {
    test("Deve renderizar corretamente", () => {
        render(<Post imageUrl="https://via.placeholder.com/250x250">Teste</Post>);
        expect(screen.getByText('Teste')).toBeInTheDocument();
    });

    test("Deve renderizar o post-comments corretamente", () => {
        render(<Post />);
        expect(screen.getByTestId('post-comments')).toBeInTheDocument();
    });
});

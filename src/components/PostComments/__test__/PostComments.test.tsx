import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Post from "../index";

describe("Testando componente Post", () => {

    test("Deve renderizar o componente corretamente", () => {
        render(<Post />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('inserindo o primeiro comentário', () => {
        const {debug} = render(<Post />);
        const textarea = screen.getByTestId('post-comments-textarea');
        const button = screen.getByRole('button', { name: /comentar/i });

        fireEvent.change(textarea, { target: { value: "Primeiro comentário" } });
        fireEvent.click(button);

        debug()
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
    });

    test('inserindo o segundo comentário', () => {
        const {debug} =render(<Post />);
        const textarea = screen.getByTestId('post-comments-textarea');
        const button = screen.getByRole('button', { name: /comentar/i });

        fireEvent.change(textarea, { target: { value: "Segundo comentário" } });
        fireEvent.click(button);

        debug()
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });

    test('verificando se os dois comentários estão na lista', () => {
        render(<Post />);
        const textarea = screen.getByTestId('post-comments-textarea');
        const button = screen.getByRole('button', { name: /comentar/i });

        fireEvent.change(textarea, { target: { value: "Primeiro comentário" } });
        fireEvent.click(button);
        fireEvent.change(textarea, { target: { value: "Segundo comentário" } });
        fireEvent.click(button);

        const commentItems = screen.getAllByTestId('comment-item');
        expect(commentItems.length).toBe(2);
        expect(commentItems[0]).toHaveTextContent('Primeiro comentário');
        expect(commentItems[1]).toHaveTextContent('Segundo comentário');
    });
});

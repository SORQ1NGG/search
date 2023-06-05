import { it, describe, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/vue';
import '@testing-library/jest-dom/extend-expect';
import LoadButton from '@/components/ui/buttons/LoadButton/index.vue';

describe('LoadButton', () => {
    it('should emit "load-users" event when clicked', async () => {
        const { getByRole, emitted } = render(LoadButton, {
            props: {
                tag: 'button',
                loading: false,
            },
        });

        const button = getByRole('button');
        await fireEvent.click(button);

        expect(emitted()).toHaveProperty('load-users');
    });

    it('should show "Загрузить еще" text when loading prop is false', () => {
        const { getByText } = render(LoadButton, {
            props: {
                tag: 'button',
                loading: false,
            },
        });

        const buttonText = getByText('Загрузить еще');
        expect(buttonText).toBeInTheDocument();
    });
});

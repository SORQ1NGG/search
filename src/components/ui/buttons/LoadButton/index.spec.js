import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/vue';
import LoadButton from '@/components/ui/buttons/LoadButton/index.vue';

describe('LoadButton', async () => {
    it('text button currently', async () => {
        const textButton = await screen.findByText('Загрузить еще');
        await fireEvent.click(textButton);
    });

    it('has a button', async () => {
        expect(findByTitle('button')).toBeTruthy();
    });

    const { findByTitle } = render(LoadButton);
});

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import '@testing-library/jest-dom/extend-expect';
import UserDataList from '@/components/UserDataList/index.vue';

describe('UserDataList', () => {
    it('renders the title and user list when usersData is not empty', () => {
        const usersData = [
            { id: 1, login: 'user1', html_url: 'https://github.com/user1' },
            { id: 2, name: 'user2', html_url: 'https://github.com/user2' },
        ];
        const title = 'User List';
        const { getByText, getAllByRole } = render(UserDataList, {
            props: { usersData, title },
        });

        const titleElement = getByText(title);
        expect(titleElement).toBeInTheDocument();

        const userLinks = getAllByRole('link');
        expect(userLinks).toHaveLength(usersData.length);
        expect(userLinks[0]).toHaveAttribute('href', usersData[0].html_url);
        expect(userLinks[0]).toHaveTextContent(usersData[0].login);
        expect(userLinks[1]).toHaveAttribute('href', usersData[1].html_url);
        expect(userLinks[1]).toHaveTextContent(usersData[1].name);
    });

    it('does not render anything when usersData is empty', () => {
        const { queryByText, queryAllByRole } = render(UserDataList, {
            props: { usersData: [], title: 'User List' },
        });

        const titleElement = queryByText('User List');
        expect(titleElement).not.toBeInTheDocument();

        const userLinks = queryAllByRole('link');
        expect(userLinks).toHaveLength(0);
    });
});

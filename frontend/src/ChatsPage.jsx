import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';
import PropTypes from 'prop-types'; // Import PropTypes

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '47a5ca95-a55b-4e7a-a382-87f7c3b4c3dc',
         props.user.username, 
         props.user.secret);
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height: '100%'}} />
        </div>
    );
};

// Define PropTypes for ChatsPage
ChatsPage.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        secret: PropTypes.string.isRequired,
    }).isRequired,
};

export default ChatsPage;

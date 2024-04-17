import React, { useEffect, useState } from 'react';
import { getItems, addItem } from '../_services/comments-service.js'; // Ensure addItem is imported here
import { useUserAuth } from '../_utils/auth-context';

const Contact = () => {
    const [comment, setComment] = useState('');
    const [commentsList, setCommentsList] = useState([]);
    const { user } = useUserAuth();

    useEffect(() => {
        const fetchComments = async () => {
            if (user) {
                const fetchedComments = await getItems(user.uid);
                setCommentsList(fetchedComments);
            }
        };

        fetchComments();
    }, [user]);

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const submitComment = async () => {
        if (comment.trim() && user) {
            const newItem = { text: comment, userId: user.uid, timestamp: new Date() };
            const docRefId = await addItem(user.uid, newItem); 
            setCommentsList([...commentsList, { ...newItem, id: docRefId }]);
            setComment('');
        }
    };
    return (
        <div id="contact" className="section bg-white mt-5">
            <div className="container mx-auto p-5">
                <h1 className="text-2xl font-bold mb-4 text-black">Contact Me</h1>
                <div className="mb-5">
                    <p className="text-black font-semibold">Phone: (825)734-0914</p>
                    <p className="text-black font-semibold">Email: <a href="mailto:preetinder.singh@edu.sait.ca">preetinder.singh@edu.sait.ca</a></p>
                    <p className="text-black font-semibold">GitHub: <a href="https://github.com/Preetinder325" target="_blank">Preetinder325</a></p>
                    <p className="text-black font-semibold">LinkedIn: <a href="https://linkedin.com/in/preetinder-singh-239629263" target="_blank">Preetinder-Singh-239629263</a></p>
                </div>
                <h2 className="text-xl font-bold mt-5 mb-3 text-black">Leave a Comment</h2>
                <textarea
                    value={comment}
                    onChange={handleCommentChange}
                    className="w-full p-2 border rounded"
                    placeholder="Write your comment here..."
                    style={{ color: 'black' }} 
                ></textarea>
                <button
                    onClick={submitComment}
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                >
                    Send
                </button>

                <div className="mt-4">
                    <h3 className="text-lg font-bold text-black">Comments</h3>
                    {commentsList.map((item, index) => (
                        <div key={index} className="mt-2 p-2 border rounded text-black">
                            {item.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;
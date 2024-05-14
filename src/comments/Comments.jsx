import { useState } from "react";

export function Comments() {
    const allComments = [
        { id: 1, username: "user1", comment: "This is comment 1." },
        { id: 2, username: "user2", comment: "This is comment 2." },
        { id: 3, username: "user3", comment: "This is comment 3." },
        { id: 4, username: "user4", comment: "This is comment 4." },
        { id: 5, username: "user5", comment: "This is comment 5." },
        { id: 6, username: "user6", comment: "This is comment 6." },
        { id: 7, username: "user7", comment: "This is comment 7." },
        { id: 8, username: "user8", comment: "This is comment 8." },
        { id: 9, username: "user9", comment: "This is comment 9." },
        { id: 10, username: "user10", comment: "This is comment 10." }
    ];

    const [currPage, setCurrPage] = useState(1);
    const commentsPerPage = 3;

    const lastIndex = currPage * commentsPerPage;
    const firstIndex = lastIndex - commentsPerPage;

    const currComents = allComments.slice(firstIndex, lastIndex);

    const nextPage = () => { setCurrPage(currPage + 1) };
    const lastPage = () => { setCurrPage(currPage - 1) }

    return (
        <>
            <h1>Comments</h1>
            <ul>
                {currComents.map(comment => {
                    return <li key={comment.id}>
                        <p>{comment.username}</p>
                        <p>{comment.comment}</p>
                    </li>
                })}
            </ul>
            <div className="pages">
                <button onClick={lastPage}>{'<'}</button>
                <span>{currPage}</span>
                <button onClick={nextPage}>{'>'}</button>
            </div>
        </>
    )
}

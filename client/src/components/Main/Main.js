/* eslint-disable array-callback-return */
import Post from "./Post"
import style from './Main.module.css';

const Main = ({
    posts
}) => {
    return (
        <main className={style.main}>
            <h1>Soooooome heading</h1>
            {/* <Post className={style.Post} posts={posts} /> */}

            <div className={style.Posts}>
                {posts.map(post =>
                    <Post
                        key={post.id}
                        content={post.content}
                        author={post.author}
                    />
                )}
            </div>
        </main >
    );
}

export default Main;
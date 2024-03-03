import getItem from "@/utils/getItem";

const Comment = async ({ id }: { id: string }) => {
    const comment = await getItem(id);
    
    return (
        <div key={comment.id} className="flex flex-col mt-2">
            <p className="font-medium">{comment.by}:</p>
            <p className="border-b-2 border-emerald-800">{comment.text}</p>
            {!comment.kids ? null : (
                <div className="ml-4">
                    {comment.kids.map((kidId: string) => (
                        <Comment key={kidId} id={kidId} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Comment;

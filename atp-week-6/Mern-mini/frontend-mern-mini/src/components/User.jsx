function User(props){
    let {user} = props;
    return (
        <div className="flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-md">
            <img className="h-24 w-24 rounded-full object-cover" src={user.image} alt={user.name} />
            <h2 className="mt-4 text-2xl font-semibold text-slate-800">{user.name}</h2>
            <h2 className="mt-2 text-sm text-slate-600">{user.email}</h2>
        </div>
    )
}

export default User






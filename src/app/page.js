import Button from "@/components/Button";

const getUser = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    // console.log(users);
    return users;
}

const Page = async() => {
    const users = await getUser();

    return (
        <div>
          <h1>This is my Home page</h1>
            <img src="images/laptop.jpg" alt="Laptop" width={200} height={200}/>
            <Button />
            <ul>
                {users.map((user,index)=>(
                    <li key={index}>{user['name']}</li>
                ))}
            </ul>
        </div>
    );
};

export default Page;
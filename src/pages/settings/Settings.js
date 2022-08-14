import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const Settings = () => {
	const [file, setFile] = useState(null);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [success, setSuccess] = useState(false);

	const { user, dispatch } = useContext(Context);
	const PF = "/images/";

	useEffect(() => {
		setUsername(user.username);
		setEmail(user.email);
	}, []);
	console.log(user._id);
	const handleDelete = async () => {
		try {
			await axios.delete(
				`https://server-full-blog.herokuapp.com/server/settings/${user}`,
				{
					// data: { username: user.username },
				}
			);
			window.location.replace("/");
		} catch (err) {}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: "UPDATE_START" });
		const updatedUser = {
			userId: user._id,
			username,
			email,
			password,
		};
		if (file) {
			console.log(file);
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append("name", filename);
			data.append("file", file);
			updatedUser.profilePic = filename;
			// console.log(updatedUser.profilePic);
			try {
				await axios.post("/upload", data);
			} catch (err) {
				console.log(err.message);
			}
		}
		try {
			const res = await axios.put(
				"https://server-full-blog.herokuapp.com/server/users/" + user._id,
				updatedUser
			);
			setSuccess(true);
			dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
			console.log(user);
		} catch (err) {
			dispatch({ type: "UPDATE_FAILURE" });
		}
	};

	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update Your Account</span>
					<button className="settingsDeleteTitle" onClick={handleDelete}>
						Delete Account
					</button>
				</div>
				<form className="settingsForm" onSubmit={handleSubmit}>
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img
							src={file ? URL.createObjectURL(file) : PF + user.profilePic}
							alt=""
						/>
						<label htmlFor="fileInput">
							<i className="settingsPPIcon far fa-user-circle"></i>
						</label>
						<input
							type="file"
							id="fileInput"
							style={{ display: "none" }}
							onChange={(e) => setFile(e.target.files[0])}
						/>
					</div>
					<label>Username</label>
					<input
						type="text"
						placeholder={user.username}
						onChange={(e) => setUsername(e.target.value)}
						value={user.username}
					/>
					{/* <textarea
            className="settingsTextArea"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          >
            {user.username}
          </textarea> */}
					<label>Email</label>
					<input
						type="email"
						placeholder={user.email}
						onChange={(e) => setEmail(e.target.value)}
						value={user.email}
					/>
					{/* <textarea
            className="settingsTextArea"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          >
            {user.email}
          </textarea> */}

					<button className="settingsSubmit" type="submit">
						Update
					</button>
					{success && (
						<span
							style={{ color: "green", textAlign: "center", marginTop: "20px" }}
						>
							Profile has been updated...
						</span>
					)}
				</form>
			</div>
			<Sidebar />
		</div>
	);
};

export default Settings;

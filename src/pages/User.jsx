import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";
import Spinner from "../components/layout/Spinner";

function User() {
	const { getUser, user, loading } = useContext(GithubContext);

	const params = useParams();

	useEffect(() => {
		getUser(params.login);
	}, []);

	if (!loading) {
		return <div>{user.login}</div>;
	} else {
		return (
			<h3>
				<Spinner />
			</h3>
		);
	}
}

export default User;

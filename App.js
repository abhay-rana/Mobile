import React, { useState } from "react";
import { View, Text, Button, Pressable } from "react-native";

import tw from "~/tailwind";
import OtpFill from "~/components/OtpFill";

const App = () => {
	const [otp, setOtp] = useState("");

	return (
		<View>
			<OtpFill code={otp} setCode={setOtp} length={6} />
			<Pressable>
				<Text>Login</Text>
			</Pressable>
		</View>
	);
};

export default App;

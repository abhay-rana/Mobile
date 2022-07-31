import { View, Text, TextInput } from "react-native";
import React, { createRef, useMemo, useRef } from "react";

import useTilg from "tilg";
import tw from "~/tailwind";

const OtpFill = ({ code, setCode, length }) => {
	useTilg();
	const input_ref = useRef([]); //array of refs for the TextInput
	const code_ref = useRef();
	const array_length = [...Array(length).keys()];
	const temp_space = useRef([...Array(length)].fill(" ").join()); //array of  spaces
	console.log(temp_space.current);
	input_ref.current = useMemo(() => array_length.map(() => createRef()), []); //create dynamic input_text refs

	// console.log("code", code.split(""));

	const setOtpInput = (event, index) => {
		console.log("text is", event.nativeEvent.text);
		// console.log("index is", index);
		let temp_code;
		// if (index == length && event.nativeEvent.text) return;
		if (!event.nativeEvent.text) {
			// setCode(code.replace(code.split("")[index], " "));
			console.log("here");
			temp_code = code.replace(code.split("")[index], " ");
			input_ref.current[index].current.setNativeProps({ text: temp_code });
			if (index != 0) input_ref.current[index - 1].current.focus();
		} else if (!!event.nativeEvent.text) {
			// setCode(code.replace(code.split("")[index], event.nativeEvent.text.trim()));
			// console.log("temp_space", temp_space.current);
			temp_code = temp_space.current.replace(temp_space.current.split(",")[index], event.nativeEvent.text.trim());
			// console.log("temp_code", temp_code);
			input_ref.current[index].current.setNativeProps({ text: event.nativeEvent.text });
			input_ref.current[index + 1].current.focus();
		}
		// console.log("code is", temp_code, temp_space.current);
		// setTimeout(() => {
		// 	setCode(temp_code.replaceAll(",", "").trim());
		// }, 500);
	};

	return (
		<>
			<View style={tw`flex flex-row`}>
				{array_length.map((_, index) => {
					return (
						<React.Fragment key={index}>
							<TextInput
								style={tw`border-2 w-11 m-2 p-2 text-xl m-1`}
								value={code.split("")[index] ?? ""}
								onChange={(event) => setOtpInput(event, index)}
								keyboardType="number-pad"
								ref={input_ref.current[index]}
								maxLength={1}
							/>
						</React.Fragment>
					);
				})}
			</View>
		</>
	);
};

export default OtpFill;

import React from "react";

const Form = props => (
    <form className="buttoncenter">
	<form  onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="City..."/>
		<input type="text" name="country" placeholder="Country..."/>
		<button >Get Weather</button>
	</form>
    </form>
);

export default Form;


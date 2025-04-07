import { createContext, useEffect, useReducer, useState } from "react";

const DebugContext = createContext({
	show_debug: false,
	info: {},
	add_info: (key, value) => {},
	remove_info: (key) => {},
	enable: () => {},
	disable: () => {}
})

const DebugContextProvider = ({children}) => {
	const [info, set_info] = useState({log: 'Hello World'})
	const [show_debug, set_show_debug] = useState(false)

	useEffect(() => {
		console.log({show_debug})
	}, [show_debug])
	const add_info = (key: string, value: string) => {
		set_info(curr_state => {
			const copy = {...curr_state}
			copy[key] = value
			return copy
		})
	}

	const remove_info = (key: string) => {
		set_info(curr_state => {
			const copy = {...curr_state}
			delete copy[key]
			return copy
		})
	}

	const enable = () => {
		set_show_debug(true)
	}

	const disable = () => {
		set_show_debug(false)
	}

	const value = {show_debug, info, add_info, remove_info, enable, disable}

	return <DebugContext.Provider value={value}>
		{children}
	</DebugContext.Provider>
}


export default DebugContext
export { DebugContextProvider }



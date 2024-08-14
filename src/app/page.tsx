/*
React.FC
React.ReactNode
*/
  // const mycomp = (): React.ReactNode => <div>hy bro</div>

import Counter from "./counter"

export default function Home() {
  console.log("My name is umair jamali")

  return (
<Counter message={'Counter App'} count={1}/>
    
  )
}
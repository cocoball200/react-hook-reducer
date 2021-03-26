# 컴포넌트의 생명주기. 
컴포넌트의 생성부터 소멸까지의 과정을 컴포넌트의 생명주기라고 한다. 컴포넌트는 생명주기마다 함수를 가지고 있는데, 이 함수들을 이용하면, 특정 시점에 원하는 동작을 하도록 만들 수 있다. 

# 생명주기 함수
생명주기 함수는 render을 포함하여 총 8개의 함수가 있다. 생명주기 함수는 리액트 엔진에서 자동으로 호출한다. 그래서 개발자가 마음대로 호출할 수 없다. 

# constructor(props) 함수 
constructor 함수는 이름 그대로 '맨 처음에 생성될 때 한번만 호출' 되며 상태를 선언할때 사용된다. constructor() 함수를 정의할때는 항상 super()함수를 가장 위에 호출해야한다. super() 함수에는 프로퍼티와 생명주기 상태등을 초기화하는 중요한 과정을 포함하고 있기 때문. 

# render() 함수 
render()함수는 데이터가 변경되어 새 화면을 구려야 할 때 자동으로 호출되는 함수입니다. render()함수가 반환하는 JSX를 화면에 그려준다. 

# getDerivedStateFromProps(props, state)함수 
getDerivedStateFromProps() 함수는 정적 함수이다. 따라서 함수 안에서 this.props나 this,state와 같은 방법으로 프로퍼티나 state값에 접근할 수 없습니다. 만약 각 값에 접근해야 하는 경우 반드시 인자로 전달된 props, state를 이용해야 한다. 이때 props는 상위 컴포넌트에 전달된 값이고, state는 현재 컴포넌트의 state 값이다. 이 함수는 상위 컴포넌트에서 전달받은 프로퍼티로 state값을 연동할 때 주로 사용되며, 반환값으로 state를 변경한다. 

# componentDidMount()함수 
componentDidMount() 함수는 render() 함수가 JSX를 화면에 그린 이후에 호출되는 함수이다. 컴포넌트가 화면에 모두 표현된 이후 해야 하는 작업들은 여기서 하면 된다. 

# shouldComponentUpdate(nextProps,nextState)함수
shouldComponentUpdate() 함수는 프로퍼티를 변경하거나 setState함수를 호출하여 state값을 변경하면 화면을 새로 출력해야 하는지 판단하는 함수이다. 이 함수는 화면을 새로 출력할지 말지 판단하고, 데이터 변화를 비교하는 작업을 포함하므로 리액트 성능에 영향을 많이 준다. 화면 변경을 위해 검증 작업을 해야하는 경우 이 함수를 사용하면 된다. forceUpdate()함수를 호출하여 화면을 출력하면 이 함수는 호출되지 않는다. 

# getSnapshotBeforeUpdate(prevProps, prevState) 함수 
getSnapshotBeforeUpdate() 함수는 컴포넌트의 변경된 내용이 가상 화면에 완성된 이후 호출되는 함수이다. 이 함수는 컴포넌트가 화면에 실제로 출력되기 전에 호출되므로 화면에 출력될 엘리먼트의 크기 또는 스크롤 위치 등의 DOM정보에 접근할 때 사용된다. 

# componentDidUpdate(prevProps, prevState,snapshot) 함수 
componentDidUpdate() 함수는 컴포넌트가 실제 화면에 출력된 이후 호출되는 함수이다. 이 함수는 부모 컴포넌트로 부터 전달된 이전 프로퍼티와 이전 state 값과 함께 getSnapshotBeforeUpdate 함수에서 반환된 값을 인자로 전달받는다. 이 값들을 이용하여 스크롤 위치를 옮기거나 커서를 이동시키는 등의 DOM 정보를 변경할 때 사용된다. 

# componentWillUnmount 함수 
컴포넌트가 소멸되기 직전에 호출되는 함수이다. 보통 컴포넌트에서 감시하고 있는 작업들을 해제할 때 필요한 함수이다. 예를 들어 컴포넌트에 setInterval 함수가 사용되었다면 이 함수에서 setInterval 함수를 clearInterval 함수로 해제해야 한다. 이러한 해제 작업이 생략되면 메모리 누수 현상이 발생하여 웹 브라우저의 작동이 멈추기도 함. 

# 생명주기 함수의 실행 과정. 
index.js파일의 ReactDOM.render() 함수가 실행되면 App 컴포넌트의 최초 생명주기 함수인 constructor()가 실행된다. 만약 App컴포넌트가 자식 컴포넌트를 가지고 있다면, 자식 컴포넌트 역시 독립적인 생명주기를 가진다. 
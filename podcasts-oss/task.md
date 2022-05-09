## WHAT SHOULD BE DONE

- remove jquery from the project (and use native dom manipulation)
- fix/remove font-awesome
- fix the searchForm (by connecting the podcastList component to the actual search form !)
- Split compoenents to not have more than 45lines per components
- Remove the logo class component and added its render to the Header component
- Change the Button component from a class component to a small function component:
    export const Button = () => {
        return (
            <></>
        )
    }


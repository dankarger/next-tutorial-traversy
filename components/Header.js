import HeaderStyles from '../styles/Header.module.css'

const Header = ()=> {
    const x = 5
    return (
        <div>
            <h1 className={HeaderStyles.title}>
                <span>WebDev</span> News
            </h1>
            <p className={HeaderStyles.description}>Keep up to date with the latest news</p>
            {/*<style jsx>*/}
            {/*    {`*/}
            {/*        .title {*/}
            {/*             color: ${x > 3? 'red' : 'blue'}*/}
            {/*        }`}*/}
            {/*</style>*/}
        </div>
    )

}
export default Header

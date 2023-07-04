import SearchPanel from "./components/SearchPanel";
import Tabs from "./components/Tabs"

const Filters = ({ search, onSetSearch, onChangeTab, tab }) => {
    return (
        <div className="search-panel">
        <SearchPanel 
         search={search}
         onSetSearch={onSetSearch}
        />
        <Tabs 
         onChangeTab={onChangeTab}
         tab={tab}
        />
    </div>

    )
}

export default Filters;
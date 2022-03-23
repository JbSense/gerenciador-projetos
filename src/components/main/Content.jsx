import './Content.css'
import HeaderContent from '../HeaderContent'
import SectionBar from '../SectionBar'
import TaskContent from '../TaskContent'

function Content() {
  return(
    <div className="Content">
      <HeaderContent />
      <SectionBar />
      <TaskContent />
    </div>
  )
}

export default Content
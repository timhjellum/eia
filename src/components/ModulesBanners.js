import React, { Component } from "react"
import Page from "./Page"
import Top from "./Placeholders/Top"

import Alert from "./Banners/Alert"
import Error from "./Banners/Error"
import Information from "./Banners/Information"
import Notice from "./Banners/Notice"
import Success from "./Banners/Success"
import Note from "./Banners/Note"
import CallOut from "./Banners/CallOut"

import AlertExample from "./Banners/AlertExample"
import ErrorExample from "./Banners/ErrorExample"
import InformationExample from "./Banners/InformationExample"
import NoticeExample from "./Banners/NoticeExample"
import SuccessExample from "./Banners/SuccessExample"
import NoteExample from "./Banners/NoteExample"
import CallOutExample from "./Banners/CallOutExample"
import MessagingExample from "./Banners/MessagingExample"

class Moduless extends Component {
	render() {
		return (
			<Page title="Messaging & Banners">
				<span className="modules">
					<h1 className="_h1">Messaging & Banners</h1>
					{/* end banner */}
					{/* start banner */}
					<h3 className="_h3 modules">Alert</h3>
					<AlertExample />
					<Alert />
					<Top />
					{/* end banner */}
					{/* start banner */}
					<h3 className="_h3 modules">Error</h3>
					<ErrorExample />
					<Error />
					<Top />
					{/* end banner */}
					{/* start banner */}
					<h3 className="_h3 modules">Information</h3>
					<InformationExample />
					<Information />
					<Top />
					{/* end banner */}
					{/* start banner */}
					<h3 className="_h3 modules">Notice</h3>
					<NoticeExample />
					<Notice />
					<Top />
					{/* end banner */}
					{/* start banner */}
					<h3 className="_h3 modules">Success</h3>
					<SuccessExample />
					<Success />
					<Top />
					{/* end banner */}
					{/* start banner */}
					<h3 className="_h3 modules">Note</h3>
					<NoteExample />
					<Note />
					<Top />
					{/* end banner */}
					{/* start banner */}
					<h3 className="_h3 modules">Callout</h3>
					<CallOutExample />
					<CallOut />
					<Top />
					{/* end banner */}
					{/* start banner */}

					<MessagingExample />
					<Top />
					{/* end banner */}
					{/* start banner */}
				</span>
			</Page>
		)
	}
}
export default Moduless

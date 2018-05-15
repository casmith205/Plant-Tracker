import React, { Component } from "react";

class OutdoorPlantContainer extends Component {
    render() {
        let outdoorPlantList = [];
        console.log("inside OutdoorPLantCOntainer", this.props.plantsArray, outdoorPlantList.length);
        for (var i = 0; i < this.props.plantsArray.length; i++) {
            if (this.props.plantsArray[i].type.toLowerCase() == 'outdoor') {
                outdoorPlantList.push(<li key={this.props.plantsArray[i].id}>{this.props.plantsArray[i].plantName} {outdoorPlantList.length}</li>);
            }
        }
        return (
            <div>
                <h4 className="center-align">Your Outdoor Plants</h4>
                <ul className="center-align">
                    {outdoorPlantList.length ? (
                         outdoorPlantList 
                    ) : (
                            <h4>None</h4>
                        )}
                </ul>
            </div>
        )
    }
}

export default OutdoorPlantContainer;

// {this.state.savedArticles.length ? (
//     <List>
//       {this.state.savedArticles.map(savedArticles => (
//         <ListItem key={savedArticles._id}>
//           <h3>{savedArticles.title}</h3>
//           <h4>{savedArticles.date}</h4>
//           <DeleteBtn onClick={() => this.deleteArticle(savedArticles._id)} />
//         </ListItem>
//       ))}
//     </List>
//   ) : (
//       <h3>No Results to Display</h3>
//     )}
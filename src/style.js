import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'fontFace': {
    'fontFamily': ''Muli'',
    'src': 'url("~./assets/Muli-Light.ttf") format("truetype")',
    'fontWeight': 'normal',
    'fontStyle': 'normal'
  },
  'fontFace': {
    'fontFamily': ''Muli'',
    'src': 'url("~./assets/Muli-Regular.ttf") format("truetype")',
    'fontWeight': 'bold',
    'fontStyle': 'normal'
  },
  'body': {
    'fontFamily': ''Muli', Helvetica, Arial, sans-serif',
    'color': '#35495e',
    'paddingBottom': [{ 'unit': 'rem', 'value': 2 }],
    'display': 'flex',
    'justifyContent': 'center',
    'backgroundColor': '#678bec'
  },
  'body #app': {
    'display': 'block !important',
    'flexBasis': '1000px'
  },
  'body #app #header': {
    'display': 'flex',
    'flexDirection': 'row',
    'justifyContent': 'space-between',
    'alignItems': 'flex-end'
  },
  'body #app #header div:first-child': {
    'display': 'flex',
    'flexDirection': 'row',
    'alignItems': 'center',
    'margin': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  },
  'body #app #header div:first-child img': {
    'width': [{ 'unit': 'px', 'value': 50 }],
    'height': [{ 'unit': 'px', 'value': 50 }]
  },
  'body #app #header div:first-child h1': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }],
    'color': '#35495e',
    'paddingTop': [{ 'unit': 'px', 'value': 7 }]
  },
  'body #app #header div:last-child': {
    'fontWeight': 'bold'
  },
  'body #app #header div:last-child button': {
    'color': '#999',
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'backgroundColor': 'white',
    'userSelect': 'none',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'borderRadius': '2px',
    'marginLeft': [{ 'unit': 'rem', 'value': 0.25 }]
  },
  'body #app #header div:last-child button:focus': {
    'outline': 'none'
  },
  'body #app #header div:last-child button:hover': {
    'color': '#35495e',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'body #app #day-bar': {
    'display': 'flex',
    'justifyContent': 'flex-start',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'body #app #day-bar div': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }]
  },
  'body #app #calendar': {
    'backgroundColor': 'white'
  },
  'body #app #calendar calendar-week': {
    'display': 'flex',
    'justifyContent': 'flex-start',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'body #app #calendar calendar-week day': {
    'overflow': 'hidden',
    'fontWeight': 'bold',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }],
    'height': [{ 'unit': 'px', 'value': 100 }],
    'userSelect': 'none',
    'cursor': 'default',
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'body #app #calendar calendar-week day:last-child': {
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'body #app #calendar calendar-week daypast': {
    'opacity': '0.6'
  },
  'body #app #calendar calendar-week daynot-current-month': {
    'color': '#ddd'
  },
  'body #app #calendar calendar-week daytoday': {
    'backgroundColor': 'rgba(255, 238, 173, 0.4)'
  },
  'body #app #calendar calendar-week dayactive': {
    'backgroundColor': 'rgba(255, 182, 193, 0.3)'
  },
  'body #app #calendar calendar-week day event-list': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.8 }],
    'color': '#42b983',
    'fontWeight': 'bold',
    'listStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }]
  },
  'body #app #calendar calendar-week day event-list li': {
    'whiteSpace': 'nowrap'
  },
  'body #app #calendar calendar-week:last-child day': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'body #app #event-form': {
    'display': 'none',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': '#ddd' }],
    'position': 'fixed',
    'width': [{ 'unit': 'px', 'value': 300 }],
    'transform': 'translate(-50%, -100%)',
    'zIndex': '10',
    'padding': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 1 }],
    'backgroundColor': 'white',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#ddd' }, { 'unit': 'string', 'value': 'solid' }],
    'flexDirection': 'column',
    'alignContent': 'space-between'
  },
  'body #app #event-formactive': {
    'display': 'flex'
  },
  'body #app #event-form h4': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'px', 'value': 0 }],
    'color': '#999',
    'fontWeight': 'normal',
    'fontSize': [{ 'unit': 'rem', 'value': 1.15 }]
  },
  'body #app #event-form p': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.85 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.85 }, { 'unit': 'px', 'value': 0 }]
  },
  'body #app #event-form > *': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'body #app #event-form text': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.75 }]
  },
  'body #app #event-form text input[type='text']': {
    'width': [{ 'unit': '%H', 'value': NaN }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.25 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.75 }]
  },
  'body #app #event-form buttons': {
    'textAlign': 'right'
  },
  'body #app #event-form buttons button': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }],
    'backgroundColor': '#35495e',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#2c3c4e' }],
    'fontWeight': 'bold',
    'borderRadius': '2px',
    'color': 'white'
  },
  'body #app #event-form buttons button:focus': {
    'outline': 'none'
  },
  'body #app #event-form buttons button:hover': {
    'backgroundColor': '#3c536b',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#35495e' }]
  },
  'body #app #event-form #close-button': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'backgroundColor': 'white',
    'position': 'absolute',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'fontWeight': 'bold',
    'color': '#666',
    'right': [{ 'unit': 'rem', 'value': 0.6 }],
    'top': [{ 'unit': 'rem', 'value': 0.6 }],
    'cursor': 'pointer'
  },
  'body #app #event-form #close-button:focus': {
    'outline': 'none'
  }
});

import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  table: {
    width: '35em',
    marginLeft: '1.5em',
    boxShadow: '10px 10px 20px rgba(0,0,0,.5)',
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
      marginLeft: 0
    },
  },
  rawListContainer: {
      width: '40%',
      [theme.breakpoints.down('lg')]: {
       marginTop: '3rem'
      },
  }
}));
const RawList = () => {
  const classes = useStyles();
  return (
    <div className={classes.rawListContainer}>
      <div className="raw-list">
        <table className={classes.table}>
          <tbody>
            <tr>
              <th>Nominelt mål</th>
              <th>18%</th>
              <th>12%</th>
            </tr>
            <tr className="even">
              <td>22</td>
              <td onClick={() => props.getRaw(23.1)}>23.1</td>
              <td onClick={() => props.getRaw(23.7)}>23.7</td>
            </tr>
            <tr>
              <td>23</td>
              <td onClick={() => props.getRaw(24.1)}>24.1</td>
              <td onClick={() => props.getRaw(25.2)}>25.2</td>
            </tr>
            <tr className="even">
              <td>24</td>
              <td></td>
              <td onClick={() => props.getRaw(26.2)}>26.2</td>
            </tr>
            <tr>
              <td>25</td>
              <td onClick={() => props.getRaw(26.2)}>26.2</td>
              <td onClick={() => props.getRaw(26.9)}>26.9</td>
            </tr>
            <tr className="even">
              <td>28</td>
              <td onClick={() => props.getRaw(29)}>29.0</td>
              <td onClick={() => props.getRaw(29.7)}>29.7</td>
            </tr>
            <tr>
              <td>29</td>
              <td onClick={() => props.getRaw(30.1)}>30.1</td>
              <td onClick={() => props.getRaw(30.8)}>30.8</td>
            </tr>
            <tr className="even">
              <td>30</td>
              <td onClick={() => props.getRaw(31.2)}>31.2</td>
              <td onClick={() => props.getRaw(31.8)}>31.8</td>
            </tr>
            <tr>
              <td>32</td>
              <td onClick={() => props.getRaw(33.2)}>33.2</td>
              <td onClick={() => props.getRaw(33.8)}>33.8</td>
            </tr>
            <tr className="even">
              <td>33</td>
              <td onClick={() => props.getRaw(34.2)}>34.2</td>
              <td onClick={() => props.getRaw(34.8)}>34.8</td>
            </tr>
            <tr>
              <td>34</td>
              <td onClick={() => props.getRaw(35.3)}>35.3</td>
              <td onClick={() => props.getRaw(35.6)}>36.6</td>
            </tr>
            <tr className="even">
              <td>35</td>
              <td onClick={() => props.getRaw(36.3)}>36.3</td>
              <td onClick={() => props.getRaw(37.1)}>37.1</td>
            </tr>
            <tr>
              <td>38</td>
              <td onClick={() => props.getRaw(39.4)}>39.4</td>
              <td onClick={() => props.getRaw(39.9)}>39.9</td>
            </tr>
            <tr className="even">
              <td>40</td>
              <td onClick={() => props.getRaw(41.6)}>41.6</td>
              <td onClick={() => props.getRaw(42.4)}>42.4</td>
            </tr>
            <tr>
              <td>43</td>
              <td onClick={() => props.getRaw(44.5)}>44.5</td>
              <td onClick={() => props.getRaw(46.8)}>46.8</td>
            </tr>
            <tr className="even">
              <td>44</td>
              <td onClick={() => props.getRaw(45.5)}>45.5</td>
              <td onClick={() => props.getRaw(46.8)}>46.8</td>
            </tr>
            <tr>
              <td>45</td>
              <td onClick={() => props.getRaw(47)}>47.0</td>
              <td onClick={() => props.getRaw(47.8)}>47.8</td>
            </tr>
            <tr className="even">
              <td>46</td>
              <td onClick={() => props.getRaw(47.7)}>47.7</td>
              <td onClick={() => props.getRaw(48.8)}>48.8</td>
            </tr>
            <tr>
              <td>47</td>
              <td onClick={() => props.getRaw(48.7)}>48.7</td>
              <td onClick={() => props.getRaw(49.8)}>49.8</td>
            </tr>
            <tr className="even">
              <td>50</td>
              <td onClick={() => props.getRaw(51.7)}>51.7</td>
              <td onClick={() => props.getRaw(53.2)}>53.2</td>
            </tr>

            <tr>
              <td>56</td>
              <td onClick={() => props.getRaw(57.9)}>57.9</td>
              <td onClick={() => props.getRaw(59.4)}>59.4</td>
            </tr>
            <tr className="even">
              <td>63</td>
              <td onClick={() => props.getRaw(65)}>65</td>
              <td onClick={() => props.getRaw(67)}>67</td>
            </tr>
            <tr>
              <td>66</td>
              <td onClick={() => props.getRaw(68.1)}>68.1</td>
              <td onClick={() => props.getRaw(70.1)}>70.1</td>
            </tr>
            <tr className="even">
              <td>75</td>
              <td onClick={() => props.getRaw(77.3)}>77.3</td>
              <td onClick={() => props.getRaw(79.7)}>79.7</td>
            </tr>
          </tbody>
        </table>
      </div>
      <style jsx>{`
        table {
          background: khaki;
        }
        th,
        td {
          text-align: center;
          font-size: 1.3rem;
          font-weight: bold;
          padding: 0.3rem 0.2rem;
        }
        tr.even {
          color: khaki;
          background: indianred;
        }
        tr {
          color: indianred;
        }
        tr:hover {
          background: black;
          color: white;
        }
        td:hover {
          background: yellow;
          color: black;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default RawList;

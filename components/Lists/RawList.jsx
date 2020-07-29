import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  table: {
    width: '35em',
    marginLeft: '1.5em',
    boxShadow: '10px 10px 20px rgba(0,0,0,.5)',
    marginTop: '1rem',
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
      marginLeft: 0,
      
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
              <td>23.1</td>
              <td>23.7</td>
            </tr>
            <tr>
              <td>23</td>
              <td>24.1</td>
              <td>25.2</td>
            </tr>
            <tr className="even">
              <td>24</td>
              <td></td>
              <td>26.2</td>
            </tr>
            <tr>
              <td>25</td>
              <td>26.2</td>
              <td>26.9</td>
            </tr>
            <tr className="even">
              <td>28</td>
              <td>9.0</td>
              <td>29.7</td>
            </tr>
            <tr>
              <td>29</td>
              <td>30.1</td>
              <td>30.8</td>
            </tr>
            <tr className="even">
              <td>30</td>
              <td>31.2</td>
              <td>31.8</td>
            </tr>
            <tr>
              <td>32</td>
              <td>33.2</td>
              <td>33.8</td>
            </tr>
            <tr className="even">
              <td>33</td>
              <td>34.2</td>
              <td>34.8</td>
            </tr>
            <tr>
              <td>34</td>
              <td>35.3</td>
              <td>36.6</td>
            </tr>
            <tr className="even">
              <td>35</td>
              <td>36.3</td>
              <td>37.1</td>
            </tr>
            <tr>
              <td>38</td>
              <td>39.4</td>
              <td>39.9</td>
            </tr>
            <tr className="even">
              <td>40</td>
              <td>41.6</td>
              <td>42.4</td>
            </tr>
            <tr>
              <td>43</td>
              <td>44.5</td>
              <td>46.8</td>
            </tr>
            <tr className="even">
              <td>44</td>
              <td>45.5</td>
              <td>46.8</td>
            </tr>
            <tr>
              <td>45</td>
              <td>7.0</td>
              <td>47.8</td>
            </tr>
            <tr className="even">
              <td>46</td>
              <td>47.7</td>
              <td>48.8</td>
            </tr>
            <tr>
              <td>47</td>
              <td>48.7</td>
              <td>49.8</td>
            </tr>
            <tr className="even">
              <td>50</td>
              <td>51.7</td>
              <td>53.2</td>
            </tr>

            <tr>
              <td>56</td>
              <td>57.9</td>
              <td>59.4</td>
            </tr>
            <tr className="even">
              <td>63</td>
              <td>5</td>
              <td>7</td>
            </tr>
            <tr>
              <td>66</td>
              <td>68.1</td>
              <td>70.1</td>
            </tr>
            <tr className="even">
              <td>75</td>
              <td>77.3</td>
              <td>79.7</td>
            </tr>
          </tbody>
        </table>
      </div>
      <style jsx>{`
        table {
          background: gray;
        }
        th,
        td {
          text-align: center;
          font-size: 1.3rem;
          font-weight: bold;
          padding: 0.3rem 0.2rem;
        }
        tr.even {
          color: gray;
          background: darkgray;
        }
        tr {
          color: darkgray;
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

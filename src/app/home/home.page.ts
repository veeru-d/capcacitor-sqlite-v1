import { Component, OnInit } from '@angular/core';
import {
  SQLiteConnection,
  CapacitorSQLite,
  SQLiteDBConnection,
  DBSQLiteValues,
} from '@capacitor-community/sqlite';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private conn: SQLiteConnection;
  private db: SQLiteDBConnection;
  constructor() {}

  async ngOnInit() {
    console.log('home: ngOnInit: entered');

    this.conn = this.getConnection();
    console.log('home: ngOnInit: conn=', this.conn);

    this.db = await this.getDb(this.conn, 'testdb');
    console.log('home: ngOnInit: db=', this.db);

    const rows: DBSQLiteValues = await this.readTable(this.db);
    console.log('home: ngOnInit: readTable rows=', rows);
  }

  private getConnection = () => {
    return new SQLiteConnection(CapacitorSQLite);
  };

  private getDb = async (
    conn: SQLiteConnection,
    dbName: string
  ): Promise<SQLiteDBConnection> => {
    const db: SQLiteDBConnection = await conn.createConnection(
      dbName,
      false,
      'no-encryption',
      1,
      false
    );
    await db.open();
    return db;
  };

  private readTable = async (
    db: SQLiteDBConnection
  ): Promise<DBSQLiteValues> => {
    console.log('home: readTable: entered');

    // returns "[B@e44e523" for img column instead of "iVBORw0..." or "data:image/png;base64,iVBORw0..." or somthing like that
    const stmt = `SELECT id, name, img FROM teach;`;

    // ERROR
    // Query: in selectSQL cursor no such function: BASE64: , while compiling: SELECT id, name, BASE64(img) AS img FROM teach;
    // const stmt = `SELECT id, name, BASE64(img) AS img FROM teach;`;

    console.log('home: readTable: stmt=', stmt);

    const ret: DBSQLiteValues = await db.query(stmt, []);
    console.log('home: createTable: ret=', ret);
    return ret;
  };
}
